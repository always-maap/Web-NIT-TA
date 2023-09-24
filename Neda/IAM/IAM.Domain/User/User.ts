export class User {
  FirstName: string;
  LastName: string;
  Phone: string;
  Gender: string;
  Picture: string;
  CreatedAt: Date;
  UpdatedAt: Date;

  private constructor(
    firstName: string,
    lastName: string,
    phone: string,
    gender: string,
    picture: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Phone = phone;
    this.Gender = gender;
    this.Picture = picture;
    this.CreatedAt = createdAt;
    this.UpdatedAt = updatedAt;
  }

  public static Create(
    firstName: string,
    lastName: string,
    phone: string,
    gender: string,
    picture: string
  ) {
    return new User(
      firstName,
      lastName,
      phone,
      gender,
      picture,
      new Date(),
      new Date()
    );
  }
}
