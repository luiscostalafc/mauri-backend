// import { ObjectID } from 'mongodb';

// import Notification from '../../infra/typeorm/schemas/Notification';
// import NotificationsRepositoryInterface from '../NotificationsRepositoryInterface';
// import CreateNotificationDTO from '../../dtos/CreateNotificationDTO';

// class NotificationsRepository implements NotificationsRepositoryInterface{
//   private notifications: Notification[] = [];

//   public async create({
//     content,
//     recipient_id,
//   }: CreateNotificationDTO): Promise<Notification> {
//     const notification = new Notification();

//     Object.assign(notification, { id: new ObjectID(), content, recipient_id });

//     this.notifications.push(notification);

//     return notification;
//   }
// }

// export default NotificationsRepository;
