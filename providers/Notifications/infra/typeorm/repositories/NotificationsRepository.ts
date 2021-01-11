// import { MongoRepository, getMongoRepository } from 'typeorm';

// import NotificationsRepositoryInterface from '../../../repositories/NotificationsRepositoryInterface';
// import CreateNotificationDTO from '../../../dtos/CreateNotificationDTO';

// import Notification from '../schemas/Notification';

// class NotificationsRepository implements NotificationsRepositoryInterface {
//   private ormRepository: MongoRepository<Notification>;

//   constructor() {
//     this.ormRepository = getMongoRepository(Notification, 'mongo');
//   }

//   public async create({
//     content,
//     recipient_id,
//   }: CreateNotificationDTO): Promise<Notification> {
//     const notification = this.ormRepository.create({
//       content,
//       recipient_id,
//     });

//     await this.ormRepository.save(notification);

//     return notification;
//   }
// }

// export default NotificationsRepository;
