export class User {
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

    return user;
  }
}
