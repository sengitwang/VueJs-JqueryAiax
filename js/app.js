/**
 * Created by sen on 2016/10/31.
 */
//定义Vue组件
var vum=new Vue({
    el: "#app",
    data: {
        message: "",
        datas: "",

    },
    methods:{
        showData:function () {
            jQuery.ajax({
                type: 'Get',
                url: "/vue/json/data.json",
                success: function (data) {
                    vum.datas = data.sites;
                }
            })
        }
    }
})
//使用jquery
jQuery(function () {
    // jQuery("#btn_1").bind("click", function () {
    //     alert(jQuery("#name").val());
    // });
    loadData();
})
//jquery加载数据
function loadData() {
    jQuery.ajax({
        type: 'Get',
        url: "/vue1/json/data.json",
        success: function (data) {
            vum.message = data.sites[0].Name;
        }
    })
}