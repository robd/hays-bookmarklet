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
function fillInIncrementedInvoiceRef() {
        selectDropdownIndex("Invoice",1);
        getElement("NewRate").value=increment(getElement("PreviousRate").value);
        getElement("Password").focus();
};
function increment(oldInvoiceRef) {
        return oldInvoiceRef.replace(/(\d+)/, function(fullMatch, digits) {
                var leadingZeros = digits.match(/0+/);
                return leadingZeros + (Number(digits) + 1);
        });
}
function fillInNormalWeek() { 
        markRangeAsAbsence(1,2,3); 
        markRangeAsWorked(3,7); 
        fillInIncrementedInvoiceRef();
}; 
function fillInHolidayWeek() { 
        markRangeAsAbsence(1,7,3);
        fillInIncrementedInvoiceRef();
};