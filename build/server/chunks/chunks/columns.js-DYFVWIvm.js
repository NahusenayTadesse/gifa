import { Y as head, a4 as escape_html } from './index-server.js-G-77DcSL.js';
import { F as FilterMenu } from './FilterMenu.js-D2gHdxjx.js';
import { r as renderComponent, a as Data_table_sort, D as Data_table } from './data-table.js-CuHKJWZh.js';
import { P as Popover, a as Popover_trigger, b as Popover_content } from './popover.js-BLmiDDDH.js';
import { R as Reorder_buttons, C as Crud_dialog } from './reorder-buttons.js-Dt2VXQ0M.js';
import { I as Image_viewer } from './image-viewer.js-CwhGnqDu.js';
import { C as Crud_delete } from './crud-delete.js-BarRY9lQ.js';

//#region src/lib/dashboard/content-page.svelte
function Content_page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { title, description, addTitle, addForm, fields, columns, rows, filterKeys } = $$props;
		let filteredRows = rows;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("r7d3mh", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>${escape_html(title)} | Dashboard</title>`);
				});
			});
			$$renderer.push(`<div class="flex flex-col gap-4 p-2"><div class="flex flex-wrap items-start justify-between gap-4"><div><h1 class="font-heading text-2xl font-bold">${escape_html(title)}</h1> <p class="mt-1 max-w-2xl text-sm text-muted-foreground">${escape_html(description)}</p></div> `);
			Crud_dialog($$renderer, {
				title: addTitle,
				data: addForm,
				action: "?/add",
				fields
			});
			$$renderer.push(`<!----></div> <!---->`);
			if (filterKeys?.length) {
				$$renderer.push("<!--[0-->");
				FilterMenu($$renderer, {
					data: rows,
					filterKeys,
					get filteredList() {
						return filteredRows;
					},
					set filteredList($$value) {
						filteredRows = $$value;
						$$settled = false;
					}
				});
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			Data_table($$renderer, {
				columns,
				data: filterKeys?.length ? filteredRows : rows,
				search: true,
				fileName: title
			});
			$$renderer.push(`<!---->`);
			$$renderer.push(`<!----></div>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
//#endregion
//#region src/lib/components/Table/bigText.svelte
function BigText($$renderer, $$props) {
	const { text } = $$props;
	/**
	* Truncate text to a maximum length
	*/
	const truncateText = (text, maxLength = 10) => {
		const str = String(text);
		return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
	};
	$$renderer.push(`<div class="w-32">`);
	Popover($$renderer, {
		children: ($$renderer) => {
			Popover_trigger($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(truncateText(text))}`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Popover_content($$renderer, {
				class: "max-w-sm p-3  text-sm wrap-break-word",
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(text)}`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!---->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
//#region src/lib/dashboard/columns.ts
/**
* Column builders shared by every content page, so a route only has to say
* which fields it shows rather than repeat the TanStack boilerplate.
*/
/** Running row number, unaffected by sorting. */
var indexColumn = {
	id: "index",
	header: "#",
	cell: (info) => info.table.getRowModel().rows.findIndex((row) => row.id === info.row.id) + 1,
	enableSorting: false
};
var sortHeader = (name) => ({ column }) => renderComponent(Data_table_sort, {
	name,
	onclick: column.getToggleSortingHandler()
});
/** A plain, sortable text column. */
var column = (key, name) => ({
	accessorKey: key,
	header: sortHeader(name),
	sortable: true
});
/** Long text, truncated with the full value behind a popover. */
var longColumn = (key, name) => ({
	accessorKey: key,
	header: name,
	cell: ({ row }) => renderComponent(BigText, { text: row.original[key] ?? "" })
});
/** Thumbnail that opens the full image. */
var imageColumn = (key = "image", name = "Image") => ({
	accessorKey: key,
	header: name,
	enableSorting: false,
	cell: ({ row }) => renderComponent(Image_viewer, {
		src: row.original[key] ?? "",
		alt: name
	})
});
/** The trailing "Edit" column, wired to the shared dialog. */
var editColumn = ({ data, fields, title, keys, fileKeys = [], listKeys = [] }) => ({
	id: "edit",
	header: "Edit",
	enableSorting: false,
	cell: ({ row }) => {
		const values = { id: row.original.id };
		for (const key of keys) {
			const value = row.original[key];
			if (listKeys.includes(key)) values[key] = (value ?? []).join("\n");
			else if (key.endsWith("Id") && value != null) values[key] = String(value);
			else values[key] = value ?? "";
		}
		const existing = {};
		for (const key of fileKeys) existing[key] = row.original[key] ?? "";
		return renderComponent(Crud_dialog, {
			title,
			data,
			action: "?/edit",
			fields,
			values,
			existing,
			iconOnly: true
		});
	}
});
/**
* Up/down arrows that swap a row's `sortOrder` with its neighbour, so
* reordering a list doesn't mean retyping numbers in the edit dialog.
* `rows` must be the same server-ordered array passed to the table, so
* "first"/"last" reflect the saved order rather than whatever column the
* admin last clicked to sort by.
*/
var reorderColumn = (rows, data) => ({
	id: "reorder",
	header: "Reorder",
	enableSorting: false,
	cell: ({ row }) => {
		const index = rows.findIndex((r) => r.id === row.original.id);
		return renderComponent(Reorder_buttons, {
			data,
			id: row.original.id,
			isFirst: index <= 0,
			isLast: index === -1 || index === rows.length - 1
		});
	}
});
/** The trailing "Delete" column, wired to the shared confirmation dialog. */
var deleteColumn = (data, nameKey = "name") => ({
	id: "delete",
	header: "Delete",
	enableSorting: false,
	cell: ({ row }) => renderComponent(Crud_delete, {
		data,
		id: row.original.id,
		name: row.original[nameKey] ?? ""
	})
});

export { Content_page as C, imageColumn as a, column as c, deleteColumn as d, editColumn as e, indexColumn as i, longColumn as l, reorderColumn as r };
//# sourceMappingURL=columns.js-DYFVWIvm.js.map
