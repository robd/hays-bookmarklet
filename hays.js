(function(){
	function getElement(elementName) {
		return window.frames[2].document.getElementsByName(elementName)[0];
	};
	function selectDropdownIndex(elementName, index) {
		getElement(elementName).selectedIndex=index;
	}; 
	function markDaysAsAbsence(numberOfDays) {
		for (var dayOfWeek=1;dayOfWeek<=numberOfDays;dayOfWeek=dayOfWeek+1) {
			selectDropdownIndex("absencetype"+dayOfWeek,3);
			selectDropdownIndex("absenceunit"+dayOfWeek,1);
		}
	};
	function markWeekdaysAsWorked() {
		for (var dayOfWeek=3;dayOfWeek<=7;dayOfWeek=dayOfWeek+1) {
			getElement("hours"+dayOfWeek).value=1;
			selectDropdownIndex("hoursdd"+dayOfWeek,1);
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
	markDaysAsAbsence(2);
	if (weekdaysMarkedAsWorked()) {
		markDaysAsAbsence(7);
	} else {
		markWeekdaysAsWorked();
	}
	getElement("Password").focus();
})();