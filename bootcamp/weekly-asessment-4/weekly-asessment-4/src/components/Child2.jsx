import { useState } from 'react'

const Child2 = ({count}) => {
    // render value from counter to deterine the number of cards that display
    const [display, setDisplay] = useState('grid')
    const [theme, setTheme] = useState('dark')

    const changeDisplay = () => {(display === 'list') ? setDisplay('grid') : setDisplay('list')}
    const switchTheme = () => {(theme === 'light') ? setTheme('dark') : setTheme('light')}

    return (
        <div className='my-list'>
            <h3>My List</h3>
            <div>
                <button onClick={changeDisplay} type="button">Grid/List</button>
                <button onClick={switchTheme} type="button">Black/White</button>
                {/* card block start here */}
                    <div className={(display === 'list') ? 'grid' : 'list'}>
                        {[...Array(count)].map((element, index) => (
                            <div
                            className={(theme === 'dark') ? 'light' : 'dark'}
                            key={index}>
                            <h4>Card #{index + 1}</h4>
                            </div>
                        ))}
                    </div>
                {/* card block ends here */}
            </div>
        </div>
    );
};

export default Child2;