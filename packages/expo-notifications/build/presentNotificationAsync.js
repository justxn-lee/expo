import uuidv4 from 'uuid/v4';
import NotificationPresenter from './NotificationPresenter';
export default async function presentNotificationAsync(request) {
    const { identifier, ...notificationSpec } = request;
    // If identifier has not been provided, let's create one.
    const notificationIdentifier = identifier ?? uuidv4();
    return await NotificationPresenter.presentNotificationAsync(notificationIdentifier, notificationSpec);
}
//# sourceMappingURL=presentNotificationAsync.js.map