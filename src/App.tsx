import * as React from 'react';

const styles = require('./App.css');
const ally_pic = require('../assets/img/ally.png');

type AppProps = {}
type AppState = {}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return (
            <div className={styles['app']}>
                <div className={styles['header']}>
                    <div className={styles['picWrapper']}>
                        <img src={ally_pic} className={styles['pic']}/>
                    </div>
                    <div className={styles['headerText']}>
                        ally
                    </div>
                </div>
                <div className={styles['mainText']}>
                    not sure yet what to do with this space<br/><br/>
                    if you have any good ideas please let me know
                </div>
            </div>
        );
    }
}

export default App;