var app = angular.module("app",['materialDatePicker']);

app.controller('TableData',TableData);

TableData.$inject = ['$scope','$http'];

function TableData($scope,$http){
	$scope.open = true;
	$scope.ths = [
		{label:'姓名'},{label:'学号'},{label:'班级'},{label:'手机号码'},{label:'QQ/微信'},{label:'宿舍号'},{label:'故障原因'},{label:'详情'},{label:'图片'},{label:'状态'},{label:'提交时间'},{label:'操作'},
	];
	$scope.items = [
		{name:'曾小白',no:1321608108,grade:'移动应用开发',tel:13121608108,tecent:576084027,room:'C3-401',reason:'太帅了',detail:'就是帅，没办法',pic:'',more:'未完成',time:'2015-01-19'},
		{name:'莫杰豪',no:1321608108,grade:'专业搞基',tel:13121608108,tecent:28282828,room:'A2247',reason:'太丑了',detail:'就是丑，没办法',pic:'',more:'已完成',time:'2015-11-11'},
		{name:'杨智',no:1321608108,grade:'搬砖大师',tel:13121608108,tecent:666666666,room:'B1109',reason:'比较机智',detail:'哟西',pic:'',more:'已接单',time:'2014-05-16'},
	]
}