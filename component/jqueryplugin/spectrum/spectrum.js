(function($){
	
	$.pluginManager.extend('spectrum',{
		init:init,
		getData:getData
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
                        <span data-value="'+item.value+'" style="width:'+item.value*100+'%'+'"></span>\
                    </td>\
                </tr>';
			}).join('')+'</table>';
			
		$container
			.addClass('thzt_spectrum')
			.html(html);
			
		return this;
	}

	function setData(){
		var $container=this.eq(0),
			data=arguments[0].data;

		$container.find('>table>tbody>tr').each(function(i){
			var $tr=$(this),
				$textSpan=$tr.find('>td:first-child>span'),
				$valueSpan=$tr.find('>td:last-child>span'),

				text=data[i].text,
				value=data[i].value;

			$textSpan.html(text);
			$valueSpan.html(value).attr('data-value',value).css({
				width:value*100+'%'
			});
		});

		return this;
	}

	function getData(){
		var $container=this.eq(0);

		return [].reduce.call($container.find('>table>tbody>tr'),function(memo,val){
			var $tr=$(val),
				text=$tr.find('>td:first-child>span').html().trim(),
				value=+$tr.find('>td:last-child>span').attr('data-value');

			memo.push({
				text:text,
				value:value
			});

			return memo;
		},[]);
	}
	
}(jQuery));
