

$(document).ready(function() {
    tab();
    expandedCards();
});

// Expanding Cards of Infra Credit Start
    function expandedCards() {
        const panels = document.querySelectorAll(".dark-card");
    
        panels.forEach((panel) => {
        panel.addEventListener("mouseenter", () => {
            removeActiveClasses();
            panel.classList.add("active");
        });
        });
    
        function removeActiveClasses() {
        panels.forEach((panel) => {
            panel.classList.remove("active");
        });
        }
    }

// Expanding Cards of Infra Credit Start


// At Your Service Tab Start
    function tab() {
        $(document).on('click', '.service-list li', function () {
            var indexNo = $(this).index();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').addClass('active');
            $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').siblings().removeClass('active');
        });
    }
// At Your Service Tab End