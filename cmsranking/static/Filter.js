$(function () {
    function doFilter(who) {
        $("tr").each(function () {
            const username = $(this).attr("data-user");
            if (!username) return;
            const isBi =
                username.startsWith("b") && !username.startsWith("bas");
            if (
                who === "all" ||
                (who === "biennio" && isBi) ||
                (who === "triennio" && !isBi)
            ) {
                $(this).removeClass("hidden");
            } else {
                $(this).addClass("hidden");
            }
        });
    }

    $("input[name='group']").change(function (e) {
        doFilter(this.id);
    });
    doFilter("all");
});
