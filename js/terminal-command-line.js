function changeWidth(ele) {
	if (ele.value.length > 0) {
		ele.size = ele.value.length + 1;
		ele.style.width = 'auto';
	} else {
		ele.style.width = 0;
		ele.size = 1;
	}
}