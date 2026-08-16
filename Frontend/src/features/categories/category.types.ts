export interface GetCategoriesResponse{
    success:boolean;
    categories:Category[]
}

enum CategoryType {
  INCOME,
  EXPENSE
}

export type Category = {
 id: number;
 name: string;
 userId: number | null;
 createdAt: Date;
 type: CategoryType;
}