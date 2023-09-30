import { Entity } from "@neda/framework";

import { UserCreatedEvent } from "./Events";

export class User extends Entity {
  Id: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  Gender: string;
  Picture: string;
  CreatedAt: Date;
  UpdatedAt: Date;

  private constructor(
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    gender: string,
    picture: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    super();
    this.Id = id;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Phone = phone;
    this.Gender = gender;
    this.Picture = picture;
    this.CreatedAt = createdAt;
    this.UpdatedAt = updatedAt;
  }

  public static Create(
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    gender: string,
    picture: string
  ) {
    const user = new User(
      id,
      firstName,
      lastName,
      phone,
      gender,
      picture,
      new Date(),
      new Date()
    );

    user.AddDomainEvent(new UserCreatedEvent(user));

    return user;
  }
}
