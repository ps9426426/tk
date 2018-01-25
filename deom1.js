class Foo{
	constructor(content="校长",title="带你去旅行"){
		this.content=content;
		this.title=title;
		this.init()
	}
	init(){
       this.createWrap();
	}

	createWrap(){
		let wrap=document.createElement('div');
		wrap.className="wrap"
	    let title=this.createTitle();
	    let con=this.createContent();
	    let btn1=this.createBtn("东京","success");
	    let btn2=this.createBtn("巴黎","success");
	    wrap.append(title);
	    wrap.append(con) 
	    wrap.append(btn1)
	    wrap.append(btn2)
		document.body.append(wrap);
		this.addEvent()
	}

	addEvent(){
		let sp = document.querySelectorAll("span")[0];
		let btn1 = document.querySelectorAll(".btn")[0];
		let btn2 = document.querySelectorAll(".btn")[0];
		sp.addEventListener('click',(event)=>{
			alert("删除")
			this.hide()
		})
		btn1.addEventListener('click',(event)=>{
			alert("出发~~~~")
			this.hide()
		})
		btn2.addEventListener('click',(event)=>{
			alert("出发~~~~")
			this.hide()
		})
	}
	hide(){
		var wrap=document.querySelectorAll('.wrap')[0];
		wrap.style.display="none";
	}
	createContent(){
          let h4=document.createElement('h4');
          h4.innerHTML=this.content;
          return h4;
      
	}
	createBtn(yes,cont){
		let btn1=document.createElement('button');
		let btn2=document.createElement('button');
		btn1.className="btn";
		btn1.innerHTML=yes;
		btn2.className="btn";
		btn2.innerHTML=yes;
		return btn1;
		return btn2;
	}
	createTitle(){
		let h2=document.createElement('h2');
		h2.innerHTML=this.title;
		let span=document.createElement('span');
		span.className="span"
		
		span.className="sp"; 
		span.innerHTML="X";
		h2.append(span)
		return h2;
		
	}
}

let fun=new Foo()
