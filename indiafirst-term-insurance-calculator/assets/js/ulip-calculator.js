function lifeGoal(){992<window.innerWidth&&$(".lifeGoal").owlCarousel({loop:!1,items:2,nav:!0,navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"]})}function articleSlider(){window.innerWidth<992&&$(".slideArticles").owlCarousel({loop:!0,margin:16,responsive:{0:{items:1.2},768:{items:2.2}}})}function benefitSlider(){window.innerWidth<992&&$(".benefit-wrap").owlCarousel({loop:!0,margin:24,responsive:{0:{items:1.5},576:{items:1.2},768:{items:2.1}}})}window.addEventListener("load",()=>{lifeGoal(),articleSlider(),benefitSlider()}),document.addEventListener("DOMContentLoaded",()=>{ulipChart(),typeAmountComma(),allCalculatorSlider(),rangesliders()});let accordContent=document.querySelectorAll(".accordian-content");function removeOpen(index1){accordContent.forEach((item2,index2)=>{index1!=index2&&(item2.classList.remove("open"),item2.querySelector(".accord-content").style.height="0px",item2.querySelector("i").classList.replace("icon-minus","icon-plus"))})}function rangesliders(){$(".amount-range").each(function(){parseFloat($(this).parents(".form-block").find(".rupee-input").attr("min")),parseFloat($(this).parents(".form-block").find(".rupee-input").attr("max"));$(this).rangeslider({polyfill:!1,onSlideEnd:function(){$(".form-input-holder").find(".input-wrap").removeClass("focusState")}}).on("input",function(){$(this).parents(".form-block").find(".form-control").val(this.value).trigger("keyup"),$(this).parents(".form-input-holder").find(".input-wrap").removeClass("focusState"),$(this).parents(".form-block").find(".input-wrap").addClass("focusState"),$(this).parents(".form-block").find(".input-wrap").removeClass("error")})}),$(".form-control").on("input",function(){var amtMin=parseFloat($(this).parents(".form-block").find(".rupee-input").attr("min")),amtMax=parseFloat($(this).parents(".form-block").find(".rupee-input").attr("max")),trigVal=$(this).val().replace(/,/g,"");amtMax<trigVal||""==trigVal||trigVal<amtMin||""==trigVal||$(this).parents(".form-block").find(".rupee-input").val(trigVal).trigger("change")}),$(".form-control").on("focus",function(){$(this).parents(".form-input-holder").find(".input-wrap").removeClass("focusState"),$(this).parents(".form-block").find(".input-wrap").addClass("focusState")}),$(".form-control").on("blur",function(){$(".form-input-holder").find(".input-wrap").removeClass("focusState")})}function typeAmountComma(){$("#monthlyPpf, #amtInvest").keyup(function(){var newvalue=$(this).val().replace(/,/g,""),newvalue=Number(newvalue).toLocaleString("en-IN");$(this).val(newvalue)})}accordContent.forEach((item,index)=>{item.querySelector(".accordian-title").addEventListener("click",()=>{item.classList.toggle("open");var description=item.querySelector(".accord-content");item.classList.contains("open")?(description.style.height=description.scrollHeight+"px",item.querySelector("i").classList.replace("icon-plus","icon-minus")):(description.style.height="0px",item.querySelector("i").classList.replace("icon-minus","icon-plus")),removeOpen(index)})}),$(".readMore").click(function(){"Read More"==$(".readMore").text()&&($(".readMore").hide(),$(".more-text").slideDown(300),$(".readLess").show())}),$(".readLess").click(function(){"Read Less"==$(".readLess").text()&&($(".readLess").hide(),$(".more-text").slideUp(300,function(){$(".readMore").show()}))}),$("#rorInvestment, #stayInvested, #yearToInvest,#amtInvest").bind("keypress",function(e){(e.shiftKey||e.keyCode<48||57<e.keyCode)&&e.preventDefault()});const ctx=document.getElementById("ulip-chart");var ulipCHart;function ulipChart(){ulipCHart=new Chart(ctx,{type:"line",data:{labels:["2022","2024","2026","2028","2022","2030","2032","2034","2036","2038","2040"],datasets:[{label:"Total",data:[1e4,5e4,1e5,5e5,1e6,15e5,2e6,25e5,3e6,35e5],borderColor:"#F47920",backgroundColor:"#00AEEF",borderShadowColor:"#00AEEF",pointHoverBorderColor:"#F47920",pointHoverBackgroundColor:"#f47920",pointHoverRadius:5,pointRadius:5,fill:!1,tension:.3}]},options:{animation:!1,showTooltips:!0,scales:{x:{grid:{display:!0,color:"#e4e4e4"},title:{display:!0,text:"Years of Growth",color:"#00AEEF"},ticks:{color:"#F47920"}},y:{beginAtZero:!0,grid:{display:!0,borderDash:[6,2],color:"#e4e4e4"},title:{display:!0,text:"Amount Invested",fontSize:12,color:"#154D83"},ticks:{callback:function(value){return value<=1e5?value/1e3+" k":value<1e7?value/1e5+" lakhs":value/1e7+" cr"}}}},plugins:{legend:{display:!1},tooltip:{mode:"index",intersect:!1,position:"nearest",yAlign:"bottom",backgroundColor:"#edf9ff",borderColor:"#CDD5E1",borderWidth:1,titleColor:"#2A2A2A",bodyColor:"#2A2A2A",displayColors:!1,titleFontStyle:"bold",bodyFontWeight:"bold",padding:10,callbacks:{title:function(context,data){return context[0].label.replaceAll(","," ")},beforeLabel:function(context,data){return["Amount Invested: "+new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumSignificantDigits:2}).format(context.dataset.data[0])]},displayTitle:!1,label:function(context,data){return["Actual Value of Investment: "+new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumSignificantDigits:2}).format(context.parsed.y)]}}}}}})}function allCalculatorSlider(){$(".all-cal-list .cal-hide").remove(),$(".all-cal-list").owlCarousel({loop:!1,margin:16,nav:!0,stagePadding:5,smartSpeed:1e3,animateOut:"slideOutLeft",animateIn:"slideInRight",responsive:{0:{items:1},420:{items:1.5},600:{items:2},992:{items:3},1200:{items:4}}}),$(".all-cal-list").trigger("refresh.owl.carousel")}$(document).on("click","#calcNow",function(){$("#tpcCalc").slideUp(),$("#ulipResult").fadeIn(),ulipCHart.destroy(),ulipChart(),$(window).width()<=992&&($("#ulip-mob-chart").slideDown(),$("#ulip-mob-returns").slideUp(),$(document).on("click","#showReturns",function(){$("#ulip-mob-chart").slideUp(),$("#ulip-mob-returns").fadeIn()}))}),$(document).on("click","#reCalc, #close",function(){$("#ulipResult").slideUp(),$("#tpcCalc").slideDown()}),$(window).width()<=575&&$("#ulip-chart").attr("height",300);