JqueryPoller
======

This poller cycle continuously when activated asking to a server to check if a list of tasks are ready.

Each task should have a callback for a success state and one for error.


Usage
-------------

### Initialize

Polling starts with this call:	

	var poller;
	poller = new JqueryPoller({
		222: { success:'func_imgs', error:'func_imgs_err' },
		444: { success:'func_vids', error:'func_vids_err' },
		555: { success:'func_imgs', error:'func_imgs_err' },
		666: { success:'func_imgs', error:'func_imgs_err' },
		77: { success:'func_vids',  error:'func_vids_err' },
		33: { success:'func_other', error:'func_other_err' },
	});

Example of those functions:

	function func_imgs(id){      console.log(id,'DONE img!'); }
	function func_imgs_err(id){  console.log(id,'ERROR img!'); }

Server responsds in JSON notation

	{"codes":{"222":"ok", "444":"pending","33":"processing"},"txts":{"222":"done", "444":"Pending...","33":"Working..."},"t":879868354}

Author
------

Adit Saxena 2010 :: GH fresh
