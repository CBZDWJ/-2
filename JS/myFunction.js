// JavaScript Document
function myFunction() {
				if (username.value == "" || username.value == null) {
					alert("用户名不能为空,请输入");
					return false;
				} else if (password.value == "" || password.value == null) {
					alert("密码不能为空");
					return false;
				} else {
						window.open("index.html", '_blank');
				}
			}