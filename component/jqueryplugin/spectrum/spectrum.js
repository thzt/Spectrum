(function($){
	
	$.pluginManager.extend('spectrum',{
		init:init
	});
	
	function init(){
		var $container=this.eq(0),
			data=arguments[0].data,
			
			html='<table>'+data.map(function(item){
				return '<tr>\
                    <td>\
                        <span>'+item.text+'</span>\
                    </td>\
                    <td>\
                        <span style="width:'+item.value*100+'%'+'"></span>\
                    </td>\
                </tr>';
			}).join('')+'</table>';
			
		$container
			.addClass('thzt_spectrum')
			.html(html);
			
		return this;
	}
	
}(jQuery));
