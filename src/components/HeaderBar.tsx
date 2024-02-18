import './HeaderBar.scss';

const HeaderBar = () => {
  return (
    <header class='header'>
      <a href='/' class='header-logo'>
        <img src='/images/logo.svg' alt='1212.one' />
      </a>
      <ul class='nav' role='navigation'>
        <li class='nav-item'>
          <a href='https://fcfbovertime.wordpress.com'>Articles</a>
        </li>
        <li class='nav-item'>
          <a href='/scores'>
            Scores
          </a>
        </li>
        <li class='nav-item'>
          <a href='/standings'>
            Standings
          </a>
        </li>
        <li class='nav-item'>
          <a href='/stats'>
            Stats
          </a>
        </li>
        <li class='nav-item'>
          <a href='/metrics'>
            Metrics
          </a>
        </li>
      </ul>
      <button class='nav-expand'>
        Menu
      </button>
    </header>
  );
};

export default HeaderBar;
