$(function(){
	$('#skill').html('<table>'+['Java','C#','Python','JavaScript','CSS'].map(function(val,trIndex){
		return '<tr data-model="['+trIndex+']" >\
            <td>\
                <span>'+val+'</span>\
            </td>\
            <td>\
                '+['Junior','Middle','Senior','Expert'].map(function(v,radioIndex){
					var radioID='radio'+trIndex+radioIndex,
						radioName='radio'+trIndex,
						isChecked=radioIndex===0;

					return '<input '+(isChecked?'checked="checked"':'')+' id="'+radioID+'" name="'+radioName+'" type="radio" />\
<label for="'+radioID+'">'+v+'</label>';
                }).join('')+'\
            </td>\
        </tr>';
	}).join('')+'</table>');

	$('#skill').delegate('>table>tbody>tr>td:last-child>:radio','click',function(){
		var data=$('#skill').bindTemplate('getData',{
				attr:'data-model',
				get:function(){
					var $field=this,
						text=$field.find('>td:first-child>span').html(),
						value=($field.find('>td:last-child>:radio:checked').index()/2+1)/4;

					console.log(value);

					return {
						text:text,
						value:value
					};
				}
			});

		$('#spectrum').spectrum('init',{
			data:data
		});
	});

	$('#skill :radio').eq(0).click();
});
