(function(){
	function getElement(elementName) {
		return window.frames[2].document.getElementsByName(elementName)[0];
	};
	function selectDropdownIndex(elementName, index) {
		getElement(elementName).selectedIndex=index;
	};
	function markDay(dayOfWeek, worked) {
		getElement("hours"+dayOfWeek).value = worked ? "1" : "";
		selectDropdownIndex("hoursdd"+dayOfWeek, worked ? 1 : 0);
		selectDropdownIndex("absencetype"+dayOfWeek, worked ? 0 : 3);
		selectDropdownIndex("absenceunit"+dayOfWeek, worked ? 0 : 1);
	};
	function markWeekdays(worked) {
		for (var dayOfWeek=3;dayOfWeek<=7;dayOfWeek=dayOfWeek+1) {
			markDay(dayOfWeek, worked);
		}
	};
	function weekdaysMarkedAsWorked() {
		for (var dayOfWeek=3;dayOfWeek<=7;dayOfWeek=dayOfWeek+1) {
			if(getElement("hours"+dayOfWeek).value == "") {
				return false;
			}
		}
		return true;
	};
	markDay(1, false);
	markDay(2, false);
	markWeekdays(!weekdaysMarkedAsWorked());
	getElement("Password").focus();
})();