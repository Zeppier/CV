import React from 'react';

import mc from 'classnames';
import B from 'bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faGlobeAmericas, faExclamation, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { formatAnchorValue } from '../utils';
import Styles from './../styles.css';

const iconMap = {
  email: faEnvelope,
  phone: faPhone,
  location: faMapMarkerAlt,
  website: faGlobeAmericas,
  linkedin: faLinkedin,
  github: faGithub,
  twitter: faTwitter
};

class ContactList extends React.Component {
  render() {
    return (
      <div className={mc(Styles.contactListContainer, B['has-text-white'])}>
        {this.props.items.map(item => {
          const icon = iconMap[item.type] || faExclamation;
          return <div className={Styles.contactListItem}>
            <FontAwesomeIcon icon={icon} />
            <a className={Styles.contactListItemContent} href={formatAnchorValue(item.type, item.value)} target='_blank'>
              {item.value}
            </a>
          </div>
        })}
      </div>
    )
  }
}

export default class Profile extends React.Component {
  render() {
    const { name, title, contacts, image } = this.props
    return (
      <div className={mc(B.container, B.box, B.hero, Styles['background'], B['is-paddingless'], B['is-marginless'])}>
        <div className={B['hero-body']}>
          <div className={mc(B.columns)}>
            <div className={mc(B.column, B['is-full'])} >
              <div className={B.level} >
                <div className={B['level-left']}>
                  <div className={B['level-item']}>
                    <figure className={mc(Styles.image)}>
                      <img className={Styles['image']} src={image} />
                    </figure>
                  </div>
                  <div className={B['has-text-centered']}>
                    <h1 className={mc(Styles.text, B['is-size-4'])}>{name}</h1>
                    <h3 className={mc(Styles.text, B['is-size-6'])}>{title}</h3>
                  </div>
                </div>
                <div className={B['level-right']}>
                  <div className={B['level-item']}>
                    <ContactList
                      items={contacts}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div></div>
      </div>
    );
  }
}
