$(function () {
    function doFilter(who) {
        $("tr").each(function () {
            const username = $(this).attr("data-user");
            if (!username) return;
            const categories = username.split("-")[0];
            const isBi = categories.includes("b");
            const isOfficial = categories.includes("t");
            if ((who === "official" && isOfficial) || (who === "biennio" && isBi)) {
                $(this).removeClass("hidden");
            } else {
                $(this).addClass("hidden");
            }
        });
    }

    $("input[name='group']").change(function (e) {
        doFilter(this.id);
    });
    doFilter("official");
});
