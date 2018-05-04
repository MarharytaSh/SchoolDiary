import React, {Component} from 'react';

import './../styles.css';
import ButtonSelectedSubject from './ButtonSelectedSubject';

let allSubjects = [{id:1, name: 'математика'}, {id:2, name: "физика"}, {id:3, name: "химия"}, {id:4, name: "биология"},
    {id:5, name: "русский язык"},{id:6, name: "английский язык"}, {id:7, name: "алгебра"}, {id:8, name: "геометрия"},
    {id:9, name: "труд"}, {id:10, name: "геология"}, {id:11, name: "история"}];

export default class SearchSubjects extends Component{
    constructor(props){
        super(props);
        this.state = { selectedSubjects:[], subject: '', hiddenListWithOptionsOfSubjects: false, onFocusInputSubject: false, ListOfPOSSIBLESubjectsForRender:'', ListOfALLubjectsForRender:true };
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
        let arr = this.state.selectedSubjects.filter((element)=> obj !== element);
        this.setState({selectedSubjects: arr});
    }


    onClickSubject(event){//если кликнули на предмет из выведенного списка
        let dataId = event.target.getAttribute('data-id');
        console.log(dataId, '///////////////////');

        this.setState((CurState)=>{
            for(let i = 0; i < allSubjects.length; i++){
                if(allSubjects[i].id === Number(dataId)){
                    let arr = CurState.selectedSubjects;
                    arr.push(allSubjects[i]);
                    return {selectedSubjects:arr, subject:''};
                }
            }
        });
        //this.hiddenListWithOptionsOfSubjectsFALSE();//скрываем список с предметами отображенный
    }

    hiddenListWithOptionsOfSubjectsFALSE(){
        this.setState({ hiddenListWithOptionsOfSubjects: false });
    }

    hiddenListWithOptionsOfSubjectsTRUE(){
        this.setState({ hiddenListWithOptionsOfSubjects: true });
    }

    onChangeSubject(event){console.log('onChangeSubject');
        let value = event.target.value;

        this.setState(()=>{
            return {subject:value};
        }, ()=>{
            if(!this.checkOnEmptyString()){//проверяет на пустоту введенный предмет this.subject
                console.log('this.checkOnEmptyString()');
                //this.hiddenListWithOptionsOfSubjectsTRUE();
                //this.makeSubjectsListForRenderAll();

            }else{console.log(this.state.subject);
                let obj = this.makePossibleSubjectsListForRender();
                console.log(obj);
                this.setState({ListOfPOSSIBLESubjectsForRender: obj.length !== 0 ?//если не путой this.subject то проверяем на возможные варианты
                    true : '', ListOfALLSubjectsForRender: obj.length !== 0});
                console.log( this.state.ListOfPOSSIBLESubjectsForRender);
            }
        });

    }

    /**makeSubjectsListForRenderAll(){
       return (<ul className="positionAbsolute">{
            allSubjects.map( (elem, index) =>
                <li key={index}><a data-id={elem.id} onClick={this.onClickSubject}>{elem.name}</a></li>)
        }</ul>);
    }*/

    makePossibleSubjectsListForRender(){
        return allSubjects.filter(elem => elem.name.indexOf(this.state.subject) !== -1);
    }


    onFocusInputSubject(event){//при установке фокуса
        console.log('onFocusInputSubject');
        this.hiddenListWithOptionsOfSubjectsTRUE();//говорим список показать
        this.setState({ onFocusInputSubject: true, ListOfALLSubjectsForRender : true });


    }

    onBlurInputSubject(event){
        console.log('nBlurInputSubject');
        this.hiddenListWithOptionsOfSubjectsFALSE();//говорим список скрыть
        this.setState({ subject : '', onFocusInputSubject: false });//очищаем subject
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


    endTimer(){

    }
    onKeyUpSubject(){
        if(this.timer){console.log('endTimer ', this);
            clearTimeout(this.timer);
        }

        if(this.checkOnEmptyString()){console.log('setTimeout');
            this.timer = setTimeout(()=>{console.log('startedTimer');
                this.setState((CurState)=>{
                    let arr = CurState.selectedSubjects;
                    let isSubjectExist = this.checkIfSubjectIsInallSubjects();

                    if(isSubjectExist){
                        arr.push(isSubjectExist);
                    }else{//если false то записываем предмет в обьект и сохраняем в стате как один из выбранных
                        let newSubject = { name: this.state.subject };
                        arr.push(newSubject);
                    }
                    return {selectedSubjects:arr, subject:'', ListOfALLSubjectsForRender : true};//возвращаем массив из выбранных премдметов (в виде обьектов) и стираем предмет в стате
                });

                //this.hiddenListWithOptionsOfSubjectsFALSE();//скрываем список с предметами отображенный
            }, 2000);
        }

    }



    render(){ console.log(this.state, '///', this);
        console.log(this.state.ListOfPOSSIBLESubjectsForRender, this.state.ListOfALLSubjectsForRender);
        /*let listOfPossibleSubjects = allSubjects
            .filter(elem => elem.name.indexOf(this.state.subject) !== -1)
            .map( (elem, index) => <li key={index}><a data-id={elem.id} onClick={this.onClickSubject}>{elem.name}</a></li>);*/





        /*let listOfSubjects = typeof ISpossibleSubject === 'undefined'
            ?  allSubjects.map( (elem, index) => <li key={index}><a data-id={elem.id} onClick={this.onClickSubject}>{elem.name}</a></li>)
            : ISpossibleSubject.map( (elem, index) => <li key={index}><a data-id={elem.id} onClick={this.onClickSubject}>{elem.name}</a></li>);


        let listForRender = (<ul className="positionAbsolute">{listOfSubjects}</ul>);*/

        let listForRenderALLSubjects = (<ul className="positionAbsolute">
            {allSubjects.map((elem, index) =>
                <li key={index}><a data-id={elem.id} onClick={this.onClickSubject}>{elem.name}</a></li>)
            }
        </ul>);

        let listForRenderPOSSIBLESubjects =  (<ul className="positionAbsolute">{
            this.makePossibleSubjectsListForRender()
                .map((elem, index) => <li key={index}><a data-id={elem.id} onClick={this.onClickSubject}>{elem.name}</a></li>)
        }</ul>);
        console.log(listForRenderALLSubjects);

        const filledSearch = (
            <div id="search" className="borderRadius5px">
                {this.state.selectedSubjects.map((element, index)=>
                    <ButtonSelectedSubject key={index} subjectID={element} deleteSelectedSubject={this.deleteSelectedSubject}/>
                )}
                <input onKeyUp={this.onKeyUpSubject}  type='text' value={this.state.subject} onFocus={this.onFocusInputSubject}  onBlur={this.onBlurInputSubject} onChange={this.onChangeSubject}/>
                {this.state.hiddenListWithOptionsOfSubjects ?  listForRenderALLSubjects : ''}

            </div>
        );



        return (
            filledSearch
        );
    }
}