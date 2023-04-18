import { Notification } from '../models/Notification.js';

export const createNotifications =  async (req, res) => {
  try {
    const { title, content, userID } = req.body;

    if (!title || !content || !userID) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const newNotification = await Notification.create({ title, content, userID });

    res.status(201).json({ message: 'Notification created successfully', notification: newNotification });
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ message: 'An error occurred while creating the notification.' });
  }
};

export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll({
      attributes: ["notificationID", "userID", "title", "content"],
    });
    res.status(200).json(notifications)
  } catch (error) {
    res.status(500).json({ message: 'error while fetching.'})
  }
}

export const getNotifications = async (req, res) => {
  try {
    const { userID } = req.params;

    if (!userID) {
      return res.status(400).json({ message: 'Missing user ID.' });
    }

    const notifications = await Notification.findAll({ where: { userID } });

    res.status(200).json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: 'An error occurred while fetching the notifications.' });
  }
};

export const patchNotifications = async (req, res) => {
  try {
    const { notificationID, title, content, userID } = req.body;
    let updatedNotification = {
      notificationID, title, content, userID
    }
    const notification = Notification.findOne({ where: { notificationID } })
    if(!notification) return res.status(404).json({ msg: "notification not found"})
    await notification.update(updatedNotification, { where: {notificationID} })
    return res.json({ msg: "update successful"})
  } catch(error) {
    res.status(500).json({ msg: "error"})
  }
}

export const deleteNotification = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedNotification = await Notification.destroy({ where: { notificationID: id } });

    if (!deletedNotification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    res.status(200).json({ message: 'Notification deleted successfully' });
  } catch (error) {
    console.error('Error deleting notification:', error);
    res.status(500).json({ message: 'An error occurred while deleting the notification.' });
  }
};


