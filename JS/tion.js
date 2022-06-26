// JavaScript Document
function tion() {
				if (username.value == "" || username.value == null) {
					alert("用户名不能为空,请输入");
					return false;
				} else if (password.value == "" || password.value == null) {
					alert("确认密码不能为空,请输入");
					return false;
				} else if (password.length < 6 || newpassword.length < 6) {
					alert("输入的密码不能小于六位")
					return false;
				} else if (newpassword.value != password.value) {
					alert("两次密码不一样,请重新输入");
					password.value = "";
					newpassword.value = "";
					return false;
				} else {
					alert("注册成功");
					window.open("表单.html")
				}
			}