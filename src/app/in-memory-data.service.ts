import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CommonMethods } from './commonMethods.component';
import { NotificationType } from './notifications/notification-type';

export class InMemoryDataService implements InMemoryDbService {

  // heroesTypes: any;

  // constructor(private common: CommonMethods){
  //   this.heroesTypes = common.heroesTypes;
  //   console.log(this.heroesTypes);
  // }

  createDb() {
    const heroes = this.heroesData();

    const heroesRules = this.heroesRulesData(heroes);

    const heroesLeague = this.heroesLeagueData();

    const notifications = this.notificationsData();

    return { heroes, heroesRules, heroesLeague, notifications };
  }

  //----------------------- Heroes
  heroesData(){
    var heroesList = [
      { id: 11, name: 'Mr. Nice', healthPoints: 0, attack: 0, defence: 0, speed: 0 },
      { id: 12, name: 'Narco', healthPoints: 0, attack: 0, defence: 0, speed: 0 },
      { id: 13, name: 'Bombasto', healthPoints: 0, attack: 0, defence: 0, speed: 0 },
      { id: 14, name: 'Celeritas', healthPoints: 0, attack: 0, defence: 0, speed: 0 },
      { id: 15, name: 'Magneta', healthPoints: 0, attack: 0, defence: 0, speed: 0 },
      { id: 16, name: 'RubberMan', healthPoints: 0, attack: 0, defence: 0, speed: 0 },
      { id: 17, name: 'Dynama', healthPoints: 0, attack: 0, defence: 0, speed: 0 },
      { id: 18, name: 'Dr IQ', healthPoints: 0, attack: 0, defence: 0, speed: 0 },
      { id: 19, name: 'Magma', healthPoints: 0, attack: 0, defence: 0, speed: 0 },
      { id: 20, name: 'Tornado', healthPoints: 0, attack: 0, defence: 0, speed: 0 }
    ];
    heroesList.forEach((hero) => {
      hero.healthPoints = CommonMethods.getRandomInRange(1, 10)
      hero.attack = CommonMethods.getRandomInRange(1, 10)
      hero.defence = CommonMethods.getRandomInRange(1, 10)
      hero.speed = CommonMethods.getRandomInRange(1, 10)
    })
    return heroesList;
  }

  //------------------------ HeroesRules
  heroesRulesData(heroes){
    var heroesRulesList = [
      { id: 1, rule: CommonMethods.heroesTypes.Priest, heroId: 0 },
      { id: 2, rule: CommonMethods.heroesTypes.Paladin, heroId: 0 },
      { id: 3, rule: CommonMethods.heroesTypes.Warrior, heroId: 0 },
      { id: 6, rule: CommonMethods.heroesTypes.Mage, heroId: 0 },
      { id: 15, rule: CommonMethods.heroesTypes.Hunter, heroId: 0 },
      { id: 10, rule: CommonMethods.heroesTypes.Warlock, heroId: 0 },
      { id: 12, rule: CommonMethods.heroesTypes.Shaman, heroId: 0 },
      { id: 4, rule: CommonMethods.heroesTypes.DeathKnight, heroId: 0 },
    ];
    heroesRulesList.forEach(hr =>
      hr.heroId = heroes[CommonMethods.getRandomTo(heroesRulesList.length)].id
    );
    return heroesRulesList;
  }

  //----------------------- HeroesLeague
  heroesLeagueData(){
    var heroesLeagueList = [
      {
        id: 1,
        name: 'Justice League',
        recruits: [{
          type: CommonMethods.heroesTypes.Warrior,
          count: 2,
        },
        {
          type: CommonMethods.heroesTypes.Hunter,
          count: 4,
        },
        {
          type: CommonMethods.heroesTypes.Mage,
          count: 1,
        }]
      },
      {
        id: 2,
        name: 'Men at Arms',
        recruits: [{
          type: CommonMethods.heroesTypes.Paladin,
          count: 3,
        }]
      },
      {
        id: 3,
        name: 'Death Knights',
        recruits: [{
          type: CommonMethods.heroesTypes.DeathKnight,
          count: 2,
        },
        {
          type: CommonMethods.heroesTypes.Warlock,
          count: 4,
        }]
      }
    ];
    return heroesLeagueList;
  }

  //----------------------- Notifications
  notificationsData(){
    // return [
    //   {
    //     id: 1,
    //     header: 'Notification Header 5',
    //     message: 'This is a dummy notification message.',
    //     isRead: false,
    //     isDeleted: false,
    //     type: CommonMethods.getRandomInEnum(NotificationType)
    //   },
    //   {
    //     id: 2,
    //     header: 'Notification Header 1',
    //     message: 'This is a dummy notification message. 2',
    //     isRead: false,
    //     isDeleted: false,
    //     type: CommonMethods.getRandomInEnum(NotificationType)
    //   },
    //   {
    //     id: 3,
    //     header: 'Notification Header 2',
    //     message: 'This is a dummy notification message. 3',
    //     isRead: false,
    //     isDeleted: false,
    //     type: CommonMethods.getRandomInEnum(NotificationType)
    //   },
    //   {
    //     id: 4,
    //     header: 'Notification Header 3',
    //     message: 'This is a dummy notification message. 5',
    //     isRead: false,
    //     isDeleted: false,
    //     type: CommonMethods.getRandomInEnum(NotificationType)
    //   },
    //   {
    //     id: 5,
    //     header: 'Notification Header 4',
    //     message: 'This is a dummy notification message. 4',
    //     isRead: false,
    //     isDeleted: false,
    //     type: CommonMethods.getRandomInEnum(NotificationType)
    //   }
    // ];
    return [
      {
        id: 1,
        header: 'Notification Header 1',
        message: 'This is a dummy notification message 1.',
        isRead: false,
        isDeleted: false,
        type: NotificationType.Info
      },
      {
        id: 2,
        header: 'Notification Header 2',
        message: 'This is a dummy notification message. 2',
        isRead: false,
        isDeleted: false,
        type: NotificationType.Success
      },
      {
        id: 3,
        header: 'Notification Header 3',
        message: 'This is a dummy notification message. 3',
        isRead: false,
        isDeleted: false,
        type: NotificationType.Warn
      },
      {
        id: 4,
        header: 'Notification Header 4',
        message: 'This is a dummy notification message. 4',
        isRead: false,
        isDeleted: false,
        type: NotificationType.Error
      },
      {
        id: 5,
        header: 'Notification Header 5',
        message: 'This is a dummy notification message. 5',
        isRead: false,
        isDeleted: false,
        type: NotificationType.Request,
        additionalAttributes:{
          id: 1,
          name: 'Name'
        }
      }
    ];
  }
}