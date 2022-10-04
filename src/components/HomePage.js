import React from 'react';
import catImage from "../image/cat.jpeg";
import Created from './Created';

class HomePage extends React.Component{
    render(){
      const text = `21歳の時にITに関して興味を持ち始め、プログラミングを学び始めた現在22歳の学生。\nフロントエンジニアを目指しReactを猛勉強中。`

      const dataLists = [
        {
            id: "1",
            title: "チャットアプリ",
            description: "Reactを使用してのチャットアプリ。Lineに似せたデザインに実装し、データ管理をFirebase上で行いました。",
            url: "git@github.com:KeiNakamur/chatapp-react.git"
        },
        {
            id: "2",
            title: "Todoアプリ",
            description: "Reactを使用してのTodoアプリの実装。デザイン等にこだわっていないので最低限の動きのみ実装。",
            url: "git@github.com:KeiNakamur/react-todo-app.git"
        },
        {
            id: "3",
            title: "Pixabayクロンアプリ",
            description: "Reactを使用してPixabayのような写真検索アプリを実装。",
            url: "git@github.com:KeiNakamur/react-pixer.git"
        }, 
    ]

    return (
      <div>
        <div className='me'>
          <div className='me-information'>
            <h2>Kei Nakamura</h2>
            <div className='catimage'>
              <img src={catImage} />
              <div className='text'>
                {text}
              </div>

              <div className='subtitle'>
                Things I Created
                ※３つ目の要素が直らないのはなぜ？？
                <div className='thing-created'>
                  <div className='websites'>
                    {dataLists.map((data) => {
                      return (
                        <Created 
                          title={data.title}
                          description={data.description}
                          url={data.url}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-button'>
            
        </div>


      </div>

      
    )
  }
}

export default HomePage;