$(function () {
  $(".accordion__header").click(function () {
    $(this).parent().toggleClass("accordion--open accordion--closed", 0);
  });
});
$(".header__nav-button").click(function () {
  $(this).parent().toggleClass("header__nav--open");
});
/*
$( "#cookieacceptbtn" ).click(function() {
    $( ".cookie-permission" ).hide();

    date = new Date();
    date.setTime(date.getTime()+(90*24*60*60*1000)); //first value is number of days the cookie will set for (90)
    expires = "; expires="+date.toGMTString();
    document.cookie="ApiShopcoookieNoticeDismissed=true" +expires + "; path=/";
});

var coookieNoticeDismissed=getCookie("ApiShopcoookieNoticeDismissed");
if (coookieNoticeDismissed=="") {
    $( "#cookieNoticeText a" ).addClass('link--underline');
    $( ".cookie-permission" ).slideDown();
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 
*/
$(document).ready(function () {
  $("p").each(function () {
    var $this = $(this);
    if ($this.html().replace(/\s|&nbsp;/g, "").length == 0) $this.remove();
  });
});

$("a").click(function (e) {
  var target = $(this).attr("target");
  if (!target || target === "_self") {
    var parentEls = $(this)
      .parents()
      .map(function () {
        return this.tagName;
      })
      .get()
      .join(", ");
    if (parentEls.indexOf("HEADER") > 0 || parentEls.indexOf("FOOTER") > 0) {
      removesessionstorage();
    }
  }
});

$(".clickable").click(function () {
  var target = $(this).find("a").attr("target");
  var url = $(this).find("a").attr("href");
  if (target === "_blank") {
    window.open(url, target);
  } else {
    window.location = $(this).find("a").attr("href");
  }
  return false;
});
$("#next-part1").click(function (e) {
  $("#form-part1").attr("style", "display:none");
  $("#form-part2").attr("style", "display:block");
  e.preventDefault();
});
$("#back-part1").click(function (e) {
  $("#form-part1").attr("style", "display:block");
  $("#form-part2").attr("style", "display:none");
  e.preventDefault();
});
function deleteCookie() {
  document.cookie =
    "sessioncookie=; expires=Fri, 05 Feb 2021 00:00:00 UTC; path=/;";
}
function removesessionstorage() {
  sessionStorage.removeItem("PersonalDetail");
  sessionStorage.removeItem("CompanySearchForm");
  sessionStorage.removeItem("CompanySearchResults_jsonarray");
  sessionStorage.removeItem("CompanySearchResults_origArray");
  sessionStorage.removeItem("CompanySearchResults_totalcount");
  sessionStorage.removeItem("CompanySearchResultsPage");
  sessionStorage.removeItem("CompanySearchResultsPerPage");
  sessionStorage.removeItem("CompanySearchResultsRecord");
  sessionStorage.removeItem("CompanySearchSortCriteria");
  sessionStorage.removeItem("userOrganisation");
  sessionStorage.removeItem("ClientSearch");
  sessionStorage.removeItem("ClientSearchResult_jsonarray");
  sessionStorage.removeItem("ClientSearchResults_origArray");
  sessionStorage.removeItem("ClientSearchResults_totalcount");
  sessionStorage.removeItem("ClientSearchResultsPage");
  sessionStorage.removeItem("ClientSearchResultsPerPage");
  sessionStorage.removeItem("ClientSearchResultsRecord");
  sessionStorage.removeItem("ClientSearchSortCriteria");
  sessionStorage.removeItem("customerOrganisation");
  sessionStorage.removeItem("confirmaccesschecked");
  sessionStorage.removeItem("Summary");
  deleteCookie();
}
