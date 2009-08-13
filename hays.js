function getElement(elementName) { 
        return window.frames[2].document.getElementsByName(elementName)[0]; 
}; 
function selectDropdownIndex(elementName, index) { 
        getElement(elementName).selectedIndex=index 
}; 
function markRangeAsAbsence(startDay,endDay,absenceType) { 
        for (var dayOfWeek=startDay;dayOfWeek<=endDay;dayOfWeek=dayOfWeek+1) { 
                selectDropdownIndex("absencetype"+dayOfWeek,absenceType); 
                selectDropdownIndex("absenceunit"+dayOfWeek,1); 
        } 
}; 
function markRangeAsWorked(startDay,endDay) { 
        for (var dayOfWeek=startDay;dayOfWeek<=endDay;dayOfWeek=dayOfWeek+1) { 
                getElement("hours"+dayOfWeek).value=1; 
                selectDropdownIndex("hoursdd"+dayOfWeek,1); 
        } 
}; 
function fillInNormalWeek() { 
        markRangeAsAbsence(1,2,3); 
        markRangeAsWorked(3,7); 
        selectDropdownIndex("Invoice",1);
        fillInIncrementedInvoiceRef();
}; 
function fillInHolidayWeek() { 
        markRangeAsAbsence(1,7,3); 
        selectDropdownIndex("Invoice",1);
        fillInIncrementedInvoiceRef();
};
function fillInIncrementedInvoiceRef() {
        getElement("NewRate").value=increment(getElement("PreviousRate").value);
        getElement("NewRate").focus(); 
};
function increment(oldInvoiceRef) {
        return oldInvoiceRef.replace(/(\d+)/, function(fullMatch, n) {return Number(n) + 1;});
}
fillInNormalWeek();