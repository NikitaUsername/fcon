import React from "react"

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-1">
                            <h3 className="logo">
                                F-CON
                            </h3>
                        </div>
                            
                        <div className="col-xl-6 offset-4 menuCol">
                            <ul className="menu d-flex">
                                <li className="menu__item">
                                    <a> 
                                        Каталог знаменитостей
                                    </a>
                                </li>
                                <li className="menu__item"> 
                                <a>
                                        Вопросы и ответы
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a>
                                        О проекте
                                    </a>
                                </li>
                                <li className="menu__item"> 
                                    <a>
                                        Контакты 
                                    </a>
                                </li>
                            </ul>
                        
                        </div>
                        <div className='col-xl-1'>
                            <div className="d-flex justify-content-end">
                                <button className="signInButton">
                                    Войти
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Header;