(function(){
	function getElement(elementName) {
		return window.frames[2].document.getElementsByName(elementName)[0];
	};
	function selectDropdownIndex(elementName, index) {
		getElement(elementName).selectedIndex=index;
	};
	function markDayAsAbsence(dayOfWeek) {
		getElement("hours"+dayOfWeek).value="";
		selectDropdownIndex("hoursdd"+dayOfWeek,0);

		selectDropdownIndex("absencetype"+dayOfWeek,3);
		selectDropdownIndex("absenceunit"+dayOfWeek,1);
	};
	function markDayAsWorked(dayOfWeek) {
		selectDropdownIndex("absencetype"+dayOfWeek,0);
		selectDropdownIndex("absenceunit"+dayOfWeek,0);

		getElement("hours"+dayOfWeek).value=1;
		selectDropdownIndex("hoursdd"+dayOfWeek,1);
	};
	function markWeekdaysAsAbsence(numberOfDays) {
		for (var dayOfWeek=3;dayOfWeek<=7;dayOfWeek=dayOfWeek+1) {
			markDayAsAbsence(dayOfWeek);
		}
	};
	function markWeekdaysAsWorked() {
		for (var dayOfWeek=3;dayOfWeek<=7;dayOfWeek=dayOfWeek+1) {
			markDayAsWorked(dayOfWeek);
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
	markDayAsAbsence(1);
	markDayAsAbsence(2);
	if (weekdaysMarkedAsWorked()) {
		markWeekdaysAsAbsence();
	} else {
		markWeekdaysAsWorked();
	}
	getElement("Password").focus();
})();