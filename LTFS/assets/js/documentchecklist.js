$(document).ready(function() {
    tabs();
    doMoreTabs();
    ProductSlider();
    innertabs();
});


// Do more SME loan Tabs Start
function doMoreTabs() {
    const tabs = document.querySelectorAll(".your-home-tabs li");
    const tabsContent = document.querySelectorAll(".your-home-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabsContent.forEach((content) => {
                content.classList.remove("active");
            });
            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tabsContent[index].classList.add("active");
            tabs[index].classList.add("active");
        });
    });
    
}
function innertabs(){
    // Get the select element, tab contents, tab menus, and tab item contents
var selectElement = document.getElementById("tab-select");
var tabContents = document.getElementsByClassName("tab-content");
var tabMenus = document.getElementsByClassName("tab-menu");
var tabItemContents = document.getElementsByClassName("tab-item-content");

// Add a change event listener to the select element
selectElement.addEventListener("change", function() {
  var selectedOption = selectElement.value;
  showTabContent(selectedOption);
});

// Add click event listeners to the tab menu items
for (var i = 0; i < tabMenus.length; i++) {
  var liItems = tabMenus[i].getElementsByTagName("li");
  for (var j = 0; j < liItems.length; j++) {
    liItems[j].addEventListener("click", function() {
      var selectedOption = this.parentNode.parentNode.id;
      var selectedItemIndex = Array.prototype.indexOf.call(this.parentNode.children, this);
      showTabContent(selectedOption, selectedItemIndex);
    });
  }
}

// Function to show the selected tab content
function showTabContent(selectedOption, selectedItemIndex) {
  // Hide all tab contents
  for (var i = 0; i < tabItemContents.length; i++) {
    tabItemContents[i].classList.remove("active");
  }

  // Show the selected tab content
  var selectedTabContent = document.getElementById(selectedOption);
  var selectedTabItemContent = selectedTabContent.getElementsByClassName("tab-item-content")[selectedItemIndex];
  selectedTabItemContent.classList.add("active");

  // Set the first li as active in each tab menu
  for (var i = 0; i < tabMenus.length; i++) {
    var liItems = tabMenus[i].getElementsByTagName("li");
    for (var j = 0; j < liItems.length; j++) {
      liItems[j].classList.remove("active");
    }
    liItems[selectedItemIndex].classList.add("active");
  }
}

// Show the default tab content on page load
showTabContent(selectElement.value, 0);

}


function tabs() {
    $(document).on('click', '.service-list li', function() {
        // alert('tab');
        var indexNo = $(this).index();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').addClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').siblings().removeClass('active');
       
    });
}


function ProductSlider() {
    $(window).on('load', function () {
        if ($(window).width() < 992) {
            $('.prodGoalWrap').slick({
                slidesToShow: 1,
                slidesToScroll:1,
                arrows: true,
                dots: false,
                infinite: false,
                // centerMode:true,
                autoplaySpeed: 500,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll:1,
                            centerMode: true,
                            autoplaySpeed: 500,
                            autoplay: false,
                            centerPadding: 0,
                        }
                    }
                ]
            });
        }
    });
}