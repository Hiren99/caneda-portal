$(document).ready(function () {
    $(".sortable-table").each(function () {
        const $table = $(this);
        const $headers = $table.find("th");

        $headers.each(function (index) {

            const $header = $(this);

            // Disable sorting for last 2 columns
            if (index >= $headers.length - 2) {
                $header.addClass("no-sort");
                return;
            }

            // Add sortable class
            $header.addClass("sortable");

            // Click event per table
            $header.on("click", function () {

                const isAsc = $header.hasClass("asc");

                // Remove sorting classes from this table only
                $headers.removeClass("asc desc");

                // Toggle
                const newOrder = isAsc ? "desc" : "asc";
                $header.addClass(newOrder);

                sortTable($table, index, newOrder === "asc");
            });

        });

    });

    // Sorting function
    function sortTable($table, colIndex, ascending) {
        const $tbody = $table.find("tbody");
        const $rows = $tbody.find("tr").get();

        $rows.sort(function (a, b) {
            const A = $(a).children().eq(colIndex).text().trim().toLowerCase();
            const B = $(b).children().eq(colIndex).text().trim().toLowerCase();

            return ascending ? A.localeCompare(B) : B.localeCompare(A);
        });

        $.each($rows, function (_, row) {
            $tbody.append(row);
        });
    }

});