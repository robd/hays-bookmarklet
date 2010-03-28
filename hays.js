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
	function markRangeAsWorked(startDay,endDay) {
		for (var dayOfWeek=startDay;dayOfWeek<=endDay;dayOfWeek=dayOfWeek+1) {
			getElement("hours"+dayOfWeek).value=1;
			selectDropdownIndex("hoursdd"+dayOfWeek,1);
		}
	};
	markDaysAsAbsence(2);
	markRangeAsWorked(3,7);
	getElement("Password").focus();
})();