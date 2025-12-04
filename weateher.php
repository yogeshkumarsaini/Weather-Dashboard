<?php $form = ActiveForm::begin(); ?> 
<div class="row-cols-3">         
  <div class="mb-2">             
<?= $form->field($model,'username')->textInput(['maxlength' => true]) ?>         
  </div>         
  <div class="mb-2">             
<?= $form->field($model,'email')->textInput(['maxlength' => true]) ?>         
  </div>         
  <div class="mb-2">             
<?= $form->field($model, 'status')->dropDownList(['Deleted'=>'Deleted', 'Active'=>'Active', 'Inactive'=>'Inactive'], ['prompt'=>'Select Status']) ?>         
  </div>      
</div>       
<div class="form-group">         
<?= Html::submitButton(Yii::t('app', 'Save'), ['class' => 'btn btn-success']) ?>     
  </div>      
<?php ActiveForm::end(); ?>
