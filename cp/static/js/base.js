$(function () {
	$(".logo_rights .earth").on("mouseenter", function () {
		$(".logo_rights .language").toggle();
	}).on("mouseleave", function () {
		$(".logo_rights .language").toggle();
	})
	$(".logo_rights .language").on("mouseenter", function () {
		$(".logo_rights .language").show();
	}).on("mouseleave", function () {
		$(".logo_rights .language").toggle();
	})

	$(".logo_rights .chinese").on("mouseenter", function () {
		$(".logo_rights .chinese").addClass("chineseselect");
	}).on("mouseleave", function () {
		$(".logo_rights .chinese").removeClass("chineseselect");
	})
	$(".logo_rights .english").on("mouseenter", function () {
		$(".logo_rights .english").addClass("chineseselect");
	}).on("mouseleave", function () {
		$(".logo_rights .english").removeClass("chineseselect");
	})

	$(".head_menu").click(function () {
		$(".headxia").slideToggle();
	})
	$(".xiaearths").click(function () {
		$(".xiaearth .xialan").toggle();
	})



})
