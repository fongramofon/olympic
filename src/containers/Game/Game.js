import React, { Component } from 'react';
import classes from './Game.css';

class Game extends Component {
    state = {
          answer: '',
          gameIsOver: false,
          mainImage: 'https://firebasestorage.googleapis.com/v0/b/olympic-5e7aa.appspot.com/o/olympic.png?alt=media&token=a2918d64-f0cc-4885-9dbd-effadb399f20',
          openedWords: [
              { number: 1, word: 'Повтор'},
              { number: 2, word: 'Переделать'},
              { number: 3, word: 'Ученый'},
              { number: 4, word: 'Результат'},
              { number: 5, word: 'Обувь'},
              { number: 6, word: 'Кожа'},
              { number: 7, word: 'Университет'},
              { number: 8, word: 'Половинка'},
          ],
          closedWords: [
              { number: 9, word: 'Заново' },
              { number: 10, word: 'Изобретение' },
              { number: 11, word: 'Сапог' },
              { number: 12, word: 'Пара' },
              { number: 13, word: 'Колесо' },
              { number: 14, word: 'Два' },
              { number: 15, word: 'Велосипед' }
          ],
          rightAnswers: []
    }

    checkTheWord = event => {
        event.preventDefault();
        this.state.closedWords.forEach((item) => {
            if(item.word.toUpperCase() === this.state.answer.toUpperCase()) {
                let rightAnswersCopy = this.state.rightAnswers;
                rightAnswersCopy.push(item);
                this.setState({ rightAnswers: rightAnswersCopy });
                console.log('it works!')
            }
        })
        this.setState({ answer: '' })
        if(this.gameCompletionChecker()) {
            this.setState({ gameIsOver: true })
        }
    }

    gameCompletionChecker = () => {
        if (this.state.closedWords.length === [...this.state.rightAnswers].length) {
            return true;
        }
        return false;
    }

    inputHandler = event => {
        this.setState({ answer: event.target.value })
    }

    render() {
        let conditionWords = this.state.openedWords.map(item => {
            return <span className={classes.conditionWord} key={`${item.word} key`}>{`${item.number}) ${item.word}`}</span>
        })
        let answers = [ ...new Set(this.state.rightAnswers) ].map(item => {
            return <span className={classes.conditionWord} key={`${item.word} key`}>{`${item.number}) ${item.word}`}</span>
        })
        let form = null;
        console.log(this.state.gameIsOver);
        if (this.state.gameIsOver) {
            form = <div>This was beautiful</div>
        } else {
            form = <form className={classes.container} onSubmit={this.checkTheWord}>
                <span>{ this.state.gameIsOver }</span>
                <img src={this.state.mainImage} className={classes.mainImage}/>
                <div className={classes.condition}>{conditionWords}</div>
                <div className={classes.answerBlock}>
                    <input className={classes.mainInput} onChange={this.inputHandler} value={this.state.answer} type="text" />
                    <button className={classes.primaryButton} type="submit">Answer</button>
                </div>
                <div className={classes.answers}>{ answers }</div>
            </form>
        }
        return (
            <div>{ form }</div>

        );
    }
}

export default Game;