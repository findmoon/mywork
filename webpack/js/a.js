function webpackTest(argument) {
	var btn = document.getElementById('change');
	btn.addEventListener('click',function() {
		var a = document.getElementsByClassName('webpack')[0];
		a.innerText = '使用webpack';
		a.style.color = 'blue';
	})
}

module.exports = webpackTest;