function lifeGoal(){992<window.innerWidth&&$(".lifeGoal").owlCarousel({loop:!1,items:2,nav:!0,smartSpeed:1e3,animateOut:"slideOutLeft",animateIn:"slideInRight",navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"]})}function articleSlider(){window.innerWidth<992&&$(".slideArticles").owlCarousel({loop:!0,margin:16,smartSpeed:1e3,animateOut:"slideOutLeft",animateIn:"slideInRight",responsive:{0:{items:1.2},768:{items:2.2}}})}window.addEventListener("load",()=>{lifeGoal(),articleSlider(),typeAmountComma(),rangesliders()});let accordContent=document.querySelectorAll(".accordian-content");function removeOpen(index1){accordContent.forEach((item2,index2)=>{index1!=index2&&(item2.classList.remove("open"),item2.querySelector(".accord-content").style.height="0px",item2.querySelector("i").classList.replace("icon-minus","icon-plus"))})}accordContent.forEach((item,index)=>{item.querySelector(".accordian-title").addEventListener("click",()=>{item.classList.toggle("open");var description=item.querySelector(".accord-content");item.classList.contains("open")?(description.style.height=description.scrollHeight+"px",item.querySelector("i").classList.replace("icon-plus","icon-minus")):(description.style.height="0px",item.querySelector("i").classList.replace("icon-minus","icon-plus")),removeOpen(index)})});const accordionItems=document.querySelectorAll(".accordian-content"),toggleBtn=document.getElementById("toggleBtn"),itemsCount=9,mobCount=6;for(let i=itemsCount;i<accordionItems.length;i++)accordionItems[i].classList.add("hideFaqs");if(toggleBtn.addEventListener("click",()=>{for(let i=itemsCount;i<accordionItems.length;i++)accordionItems[i].classList.contains("hideFaqs")&&(accordionItems[i].classList.add("showFaqs"),accordionItems[i].classList.remove("hideFaqs"),toggleBtn.style.display="none")}),$(window).width()<=992){for(let i=mobCount;i<accordionItems.length;i++)accordionItems[i].classList.add("hideFaqs");toggleBtn.addEventListener("click",()=>{for(let i=mobCount;i<accordionItems.length;i++)accordionItems[i].classList.contains("hideFaqs")&&(accordionItems[i].classList.add("showFaqs"),accordionItems[i].classList.remove("hideFaqs"),toggleBtn.style.display="none")})}const mobFeatureBtn=document.getElementById("mobShowBtn"),featureItems=document.querySelectorAll(".ia-block"),mobFeature=3;if(console.log(featureItems),$(window).width()<=992){for(let i=mobFeature;i<featureItems.length;i++)featureItems[i].classList.add("hideIaBlock");mobFeatureBtn.addEventListener("click",()=>{for(let i=mobFeature;i<featureItems.length;i++)featureItems[i].classList.contains("hideIaBlock")&&(featureItems[i].classList.add("showIaBlock"),featureItems[i].classList.remove("hideIaBlock"),mobFeatureBtn.style.display="none")})}function rangesliders(){$(".amount-range").each(function(){parseFloat($(this).parents(".form-block").find(".rupee-input").attr("min")),parseFloat($(this).parents(".form-block").find(".rupee-input").attr("max"));$(this).rangeslider({polyfill:!1,onSlideEnd:function(){$(".form-input-holder").find(".input-wrap").removeClass("focusState")}}).on("input",function(){$(this).parents(".form-block").find(".form-control").val(this.value).trigger("keyup"),$(this).parents(".form-input-holder").find(".input-wrap").removeClass("focusState"),$(this).parents(".form-block").find(".input-wrap").addClass("focusState"),$(this).parents(".form-block").find(".input-wrap").removeClass("error")})}),$(".form-control").on("blur",function(){var amtMin=parseFloat($(this).parents(".form-block").find(".rupee-input").attr("min")),amtMax=parseFloat($(this).parents(".form-block").find(".rupee-input").attr("max")),trigVal=$(this).val().replace(/,/g,"");amtMax<trigVal||""==trigVal||trigVal<amtMin||""==trigVal?$(this).parent().addClass("error-input"):$(this).parents(".form-block").find(".amount-range").val(trigVal).trigger("change")}),$(".form-control").on("focus",function(){$(this).parents(".form-input-holder").find(".input-wrap").removeClass("focusState"),$(this).parents(".form-block").find(".input-wrap").addClass("focusState")}),$(".form-control").on("blur",function(){$(".form-input-holder").find(".input-wrap").removeClass("focusState")})}function typeAmountComma(){$("#yearAnnuity").keyup(function(){var newvalue=$(this).val().replace(/,/g,""),newvalue=Number(newvalue).toLocaleString("en-IN");$(this).val(newvalue)})}$(".readMore").click(function(){$(".readMore").hide(),$(".readmore-para").css("display","block"),$(".readmore-para").css("margin-bottom","2rem"),$(".more-text").slideDown(300)}),$("#currAge ,#yearAnnuity, #retireAge, #expectROR").bind("keypress",function(e){(e.shiftKey||e.keyCode<48||57<e.keyCode)&&e.preventDefault()}),$(window).width()<=992&&($(document).on("click","#imaCalcNow",function(){$("#imaForm").slideUp(),$("#imaResult").fadeIn()}),$(document).on("click","#reCalc",function(){$("#imaResult").slideUp(),$("#imaForm").slideDown()}));