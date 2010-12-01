function JqueryPoller(arrcheck){
	var self = this;
	self.curr_arrcheck = arrcheck;
	self.full_arrcheck = arrcheck;
	self.wait = 1000;
	self.cont = true;
	self.ajaxopt = {
		dataType: 'json',
		success: function(data, textStatus){
			console.log(data);
			
			new_arrcheck = {}
			for(icode in data.codes){
				if(data.codes[icode]=='ok'){
					// ok, go callback
					eval(self.full_arrcheck[icode].success+'(icode)');
					
				}else if(data.codes[icode]=='error'){
					// error
					eval(self.full_arrcheck[icode].error+'(icode)');
					
				}else{
					// still in progress
					console.log(icode + ' <- ' + self.full_arrcheck[icode],'qqqq');
					new_arrcheck[icode] = self.full_arrcheck[icode];
					
				}
			}
			//self.cont = false;
			self.curr_arrcheck = new_arrcheck;
		},
		error: function(xhr, textStatus, errorThrown){
			var txtstat = xhr.statusText;
			if(xhr.status != 200){
					 if(xhr.status == 401){ txtstat = 'devi rieseguire il login.'; }
				else if(xhr.status == 404){ txtstat = 'la pagina richiesta non è stata trovata.'; }
				else if(xhr.status == 500){ txtstat = 'errore interno, contatta l\'assistenza fresh.'; }
				
				self.cont = false;
				alert('Attenzione: '+txtstat);
				//location.href='login';
			}
		}
	};
	
	
	self.addpolling = function(arrcheck){
		var full_arrcheck_new = self.full_arrcheck;
		var curr_arrcheck_new = self.curr_arrcheck;
		for(key in arrcheck){
			full_arrcheck_new[key] = arrcheck[key];
			curr_arrcheck_new[key] = arrcheck[key];
		}
		self.full_arrcheck = full_arrcheck_new;
		self.curr_arrcheck = curr_arrcheck_new;
		
		if(!self.cont){
			self.cont = true;
			setTimeout(polling, self.wait);
		}
	}
	
	
	var polling = function(){
		var countp = countkeys(self.curr_arrcheck);
		if(countp<1) self.cont = false;
		
		if(self.cont){
			self.ajaxopt.url = 'server_test.php'+'?'+'arr[]=' + arrkeys(self.curr_arrcheck).join('&arr[]=');
			$.ajax(self.ajaxopt);
			setTimeout(polling, self.wait);
		}
	}
	setTimeout(polling, self.wait);
}
