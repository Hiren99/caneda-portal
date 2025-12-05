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

/* -------- mobile user login grp btn menu ---------- */
$(document).ready(function () {
    // Open menu
    $('.cd-offcanvas-backdrop').on('click', function () {
        if (window.innerWidth <= 767) {
            $('.cd-offcanvas-menu').addClass('active');
            $('#mainContent').css('margin-left', '250px');
        }
    });

    // Close menu using close icon
    $('.cd-offcanvas-close').on('click', function () {
        $('.cd-offcanvas-menu').removeClass('active');
        $('#mainContent').css('margin-left', '0');
    });

    // Close menu when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.cd-offcanvas-menu, .cd-offcanvas-backdrop').length) {
            $('.cd-offcanvas-menu').removeClass('active');
            $('#mainContent').css('margin-left', '0');
        }
    });

});

/* -------- set tooltip ------------ */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
/* -------- set tooltip # ------------ */
