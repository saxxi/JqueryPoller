<?php
	
	#header('HTTP/1.1 401 Unauthorized');
	#header('HTTP/1.1 500 Internal error');
	#header('HTTP/1.1 404 Page not found');
	
	#sleep(10000);
	
	
	
	$res = array(
		'codes' => array(
			222 => 'ok',
			444 => 'pending',
			555 => 'error',
			77 => 'error',
			666 => 'ok',
			33 => 'processing',
			
			122 => 'ok',
			133 => 'error',
			144 => 'pending',
		),
		'txts'  => array(
			222 => 'Ok',
			444 => 'In attesa',
			555 => 'Attenzione file non valido',
			77 => 'Attenzione file troppo grande',
			666 => 'Ok',
			33 => 'In lavorazione',
			
			122 => 'Ok',
			133 => 'Errore inatteso',
			144 => 'In attesa',
		),
	);
	/*$res = array(
		'codes' => array(222 => 'ok', 444 => 'ok', 555 => 'error',           77 => 'error',              666 => 'ok', 33 => 'ok'),
		'txts'  => array(222 => 'Ok', 444 => 'Ok', 555 => 'file non valido', 77 => 'file troppo grande', 666 => 'Ok', 33 => 'Ok'),
	);
	$res = array(
		'codes' => array(444 => 'ok', 33 => 'ok'),
		'txts'  => array(444 => 'Ok', 33 => 'Ok'),
		'txts'  => array(144 => 'Ok', 144 => 'Ok'),
	);
	*/
	
	$res_fin = array();
	foreach($res['codes'] as $sing_key => $sing_val){
		if(in_array($sing_key, $_GET['arr'])){
			$res_fin['codes'][$sing_key] = $res['codes'][$sing_key];
			$res_fin['txts'  ][$sing_key] = $res['txts'  ][$sing_key];
		}
	}
	
	$res_fin['t'] = rand();
	
	//echo sprintf('poller.endpolling(%s);', json_encode($res));
	echo json_encode($res_fin);
?>