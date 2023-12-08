import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { data } from "./articles.js";

const ArticleSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Article id",
    },
    title: {
      type: "string",
      description: "Article title",
    },
    content: {
      type: "string",
      description: "Article content",
    },
    author: {
      type: "string",
      description: "Article author",
    },
    publishedAt: {
      type: "string",
      description: "Article published date",
    },
    isFeatured: {
      type: "boolean",
      description: "Article is featured",
    },
  },
};

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
    },
    components: {
      schemas: {
        Article: ArticleSchema,
      },
    },
  },
  apis: ["./main.js"],
};

const app = express();
app.use(express.json());
app.use(cors());

let articles = data;

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Returns the list of all the articles
 *     parameters:
 *       - in: query
 *         name: featured
 *         schema:
 *           type: boolean
 *     responses:
 *       200:
 *         description: The list of the articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 */
app.get("/api/articles", (req, res) => {
  // get only featured articles
  const onlyFeatured = req.query.featured;
  let filteredArticles = onlyFeatured
    ? articles.filter((a) => a.isFeatured)
    : articles;

  return res.json(filteredArticles);
});

/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Create a new article
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       201:
 *         description: The created article
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       409:
 *         description: An article with the same id already exists
 */
app.post("/api/articles", (req, res) => {
  const article = new Article(req.body);
  const exists = articles.some((a) => a.id === article.id);
  if (exists) return res.status(409).send();
  articles.push(article);
  res.status(201).json(article);
});

/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Get an article by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The article
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: Article not found
 */
app.get("/api/articles/:id", (req, res) => {
  const article = articles.find((a) => a.id === req.params.id);
  if (!article) return res.status(404).send();
  res.json(article);
});

/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Update an article by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       200:
 *         description: The updated article
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article'
 *       404:
 *         description: Article not found
 */
app.put("/api/articles/:id", (req, res) => {
  const article = articles.find((a) => a.id === req.params.id);
  if (!article) return res.status(404).send();
  Object.assign(article, req.body);
  res.json(article);
});

/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Delete an article by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Article deleted successfully
 *       404:
 *         description: Article not found
 */
app.delete("/api/articles/:id", (req, res) => {
  const index = articles.findIndex((a) => a.id === req.params.id);
  if (index === -1) return res.status(404).send();
  articles.splice(index, 1);
  res.status(204).send();
});

const openapiSpecification = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(3000, () => console.log("Server listening on port 3000"));

// Path: Article helpers
function guid() {
  return Math.random().toString(36).substring(2, 15);
}

class Article {
  constructor({
    id = guid(),
    title = "",
    content = "",
    author = "",
    publishedAt = new Date(),
    isFeatured = false,
  }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.publishedAt = publishedAt;
    this.isFeatured = isFeatured;
  }
}
