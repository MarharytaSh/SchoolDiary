import React, {Component} from 'react';

import './../styles.css';
import ButtonSelectedSubject from './ButtonSelectedSubject';

let allSubjects = [{id:1, name: 'математика'}, {id:2, name: "физика"}, {id:3, name: "химия"}, {id:4, name: "биология"},
                    {id:5, name: "русский язык"},{id:6, name: "английский язык"}, {id:7, name: "алгебра"}, {id:8, name: "геометрия"},
                    {id:9, name: "труд"}, {id:10, name: "геология"}, {id:11, name: "история"}];

export default class SearchSubjects extends Component{
    constructor(props){
        super(props);
        this.state = { selectedSubjects:[], subject: '', hiddenListWithOptionsOfSubjects: false, ListOfPOSSIBLESubjectsForRender: false, ListOfALLSubjectsForRender:true };
        this.onKeyUpSubject = this.onKeyUpSubject.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onClickSubject = this.onClickSubject.bind(this);
        this.deleteSelectedSubject = this.deleteSelectedSubject.bind(this);
        this.onFocusInputSubject = this.onFocusInputSubject.bind(this);
        this.onBlurInputSubject = this.onBlurInputSubject.bind(this);
    }

    componentDidMount(){
        //let allSubjects = ['математика', "физика", "химия", "биология", "русский язык", "английский язык", "алгебра", "геометрия", "труд", "геология", "история"];
        //делать запрос к северу на получение списка предметов
    }

    deleteSelectedSubject(obj){//удаляем обьект obj из this.state.selectedSubjects
        console.log(obj);
        let arr = this.state.selectedSubjects.filter((element)=> obj !== element);
        this.setState({selectedSubjects: arr});
        if(!obj.id){//удаляем из обьекта полученного с сервера предмет, только если созданный пользователем без id
            allSubjects = allSubjects.filter((elem)=> elem !== obj)
        }
    }


    onClickSubject(event){//если кликнули на предмет из выведенного списка
        let dataId = event.target.getAttribute('data-id');

        for(let i = 0; i < allSubjects.length; i++){
            let arr = this.state.selectedSubjects;
            if(allSubjects[i].id === Number(dataId)){
                arr.push(allSubjects[i]);
            }
            this.addSubjectToState(arr);
        }
        this.hideSubjects();
    }

    ClearSubjectInSate(){
        this.setState({
            subject:''
        })
    }
    addSubjectToState(arr){
        this.setState({
            selectedSubjects:arr,
        })
    }

    showAllSubjects(){
        this.setState({ListOfPOSSIBLESubjectsForRender: false,
            ListOfALLSubjectsForRender: true,
            hiddenListWithOptionsOfSubjects: true
        });
    }

    showPossibleSubjects(){
        this.setState({ListOfPOSSIBLESubjectsForRender: true,  //если не путой this.subject то проверяем на возможные варианты
            ListOfALLSubjectsForRender: false,
        });
    }
    hideSubjects(){//список скрыть
        this.setState({ListOfPOSSIBLESubjectsForRender: false,
            ListOfALLSubjectsForRender: false,
            hiddenListWithOptionsOfSubjects: false
        });
    }
    onChangeSubject(event){
        let value = event.target.value;
        this.inputSave = event.target;

            this.setState(()=>{
                return {subject:value};
            }, ()=>{
                if(!this.checkOnEmptyString()){//проверяет на пустоту введенный предмет this.subject, если пустой
                   this.showAllSubjects();//показывать все варианты
                }else{//если не пустой
                    let obj = this.makePossibleSubjectsListForRender();

                    if(obj.length !== 0){
                        this.showPossibleSubjects();
                    }else if(obj.length === 0){//если пустой this.subject и обьект с вхождениями obj, то не отображаем ничего
                        this.hideSubjects();
                    }
                }
            });
    }


    makePossibleSubjectsListForRender(){
           return allSubjects.filter(elem => elem.name.indexOf(this.state.subject) !== -1);
    }


    onFocusInputSubject(event){//при установке фокуса
        this.showAllSubjects();//говорим список показать полный
    }

    onBlurInputSubject(event){ console.log(' onBlurInputSubject');
        var currentTarget =event.currentTarget;
        var me = this;
        setTimeout(function() {
            if (!currentTarget.contains(document.activeElement)) {
                me.hideSubjects();//говорим список скрыть
                console.log('component officially blurred');
            }
        }, 0);
    }



    checkOnEmptyString(){//проверяет на пустоту введенный предмет this.subject
        return this.state.subject.replace(/\s/g, '').length > 0;
    }


    checkIfSubjectIsInallSubjects(){//проверяет есть ли предмет введенный в списки предметов с сервера, если да возвращает обьект с предметом нет false
        for (let i = 0; i < allSubjects.length; i++){
            if( allSubjects[i].name === this.state.subject){
                return allSubjects[i];
            }
        }
        return false;
    }



    onKeyUpSubject(){
        if(this.timer){
            clearTimeout(this.timer);
        }

        if(this.checkOnEmptyString()){
            this.timer = setTimeout(()=>{
                    let arr = this.state.selectedSubjects;//текущие предметы выбранные (которые в массиве selectedSubjects)
                    let isSubjectExist = this.checkIfSubjectIsInallSubjects();//если предмет есть в списке что с сервера (дубль) то возвращается этот обьект, нет false
                    if(isSubjectExist){/// если предмет есть в списке
                        arr.push(isSubjectExist);//добавляем его в массив для сохранения в качестве выбранных arr
                     }else if(!isSubjectExist && this.state.subject !== ''){//если false то записываем предмет в обьект и сохраняем в стате как один из выбранных
                            let newSubject = { name: this.state.subject };
                            allSubjects.push(newSubject);//добавляем в массив с сервера новые предметы
                            arr.push(newSubject);
                    }
                this.addSubjectToState(arr);//записать новый массив в selectedSubjects
                this.ClearSubjectInSate();//стираем Subject в стате

                this.hideSubjects();//ничего не отображать из списков
                this.inputSave.blur();//убираем фокус с ИНПУТА

            }, 3000);
        }

    }



render(){ //console.log(this, this.state);
    let listOfSubjects, listForRender;

    if(this.state.ListOfALLSubjectsForRender && !this.state.ListOfPOSSIBLESubjectsForRender){//console.log('1*');
         listOfSubjects = allSubjects.
        map((elem, index) => <li key={index}><a className = {this.state.selectedSubjects.indexOf(elem) >= 0 ? 'addBackground' : ''} href="#" data-id={elem.id} onClick={this.onClickSubject}>{elem.name}</a></li>);
        listForRender = (<ul className="positionAbsolute">{listOfSubjects}</ul>);
    }else if(!this.state.ListOfALLSubjectsForRender && this.state.ListOfPOSSIBLESubjectsForRender){//console.log('2*');
         listOfSubjects =allSubjects
        .filter(elem => elem.name.indexOf(this.state.subject) !== -1)
        .map( (elem, index) => <li key={index}><a  className = {this.state.selectedSubjects.indexOf(elem) >= 0 ? 'addBackground' : ''} href="#" data-id={elem.id} onClick={this.onClickSubject}>{elem.name}</a></li>);
        listForRender = (<ul className="positionAbsolute">{listOfSubjects}</ul>);
    }




    const filledSearch = (
        <div id="search" className="borderRadius5px" onBlur={this.onBlurInputSubject}>
            {this.state.selectedSubjects.map((element, index)=>
                <ButtonSelectedSubject key={index} subjectID={element} deleteSelectedSubject={this.deleteSelectedSubject}/>
            )}
            <input id="inputId" onKeyUp={this.onKeyUpSubject}  type='text' value={this.state.subject} onFocus={this.onFocusInputSubject} onChange={this.onChangeSubject}/>
            {this.state.hiddenListWithOptionsOfSubjects ? listForRender : ''}
        </div>
    );



    return (
        filledSearch
    );
}
}