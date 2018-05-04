/**
 * Файл содержит редьюсеры - обработчики изменения какого-либо блока
 * состояния приложения.
 * На каждый блок состояния создается свой редьюсер, которые потом
 * компонуются все вместе
 * Все редьюсеры должны называться по шаблону: set[ИмяБлокаСостояния]
 * и иметь подробное описание входных параметров
 */

import { combineReducers } from 'redux';


/**
 * Установка токена авторизации
 * @param {String} authToken текущий токен авторизации
 * @param {Object} action объект, с новым токеном: action.authToken
 */
function setAuthToken(authToken = '', action){
    if(action.type === 'SET_AUTH_TOKEN'){
        return action.authToken;
    }
return authToken;
}



/**
 * Установка признака администратора
 * @param {String} isAdmin текущее значение признака
 * @param {Object} action объект, с новым значением: action.isAdmin
 */
function setIsAdmin(isAdmin = false, action){
    if(action.type === 'SET_IS_ADMIN'){
        return action.isAdmin;
    }
return isAdmin;
}



/**
 * Установка признака учителя
 * @param {String} isTeacher текущее значение признака
 * @param {Object} action объект, с новым значением: action.isTeacher
 */
function setIsTeacher(isTeacher = true, action){
    if(action.type === 'SET_IS_TEACHER'){
        return action.isTeacher;
    }
return isTeacher;
}





/**
 * Установка признака родителя
 * @param {String} isisParent текущее значение признака
 * @param {Object} action объект, с новым значением: action.isParent
 */
function setIsisParent(isTeacher = false, action){
    if(action.type === 'SET_IS_PARENT'){
        return action.isParent;
    }
return isTeacher;
}









/**
 * Комбинирование редьюсеров
 */

export const combineReducer = combineReducers({
    authToken: setAuthToken,
    isAdmin: setIsAdmin,
    isTeacher: setIsTeacher,
    isParent: setIsisParent,

});