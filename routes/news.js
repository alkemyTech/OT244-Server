const express = require("express");
const userAuthenticate = require('../middlewares/user-authenticate');
const verifyAdmin = require("../middlewares/verifyAdmin");
const validationResult = require('../middlewares/validationResult');
const { news } = require("../middlewares/validationBody");
const { createNews, updateNews, getNew, deleteNew } = require("../controllers/news");
const router = express.Router();

router.get("/:id", userAuthenticate, verifyAdmin, getNew);

router.post("/", userAuthenticate, verifyAdmin, news, validationResult, createNews);

router.put('/:id', userAuthenticate, verifyAdmin, news, validationResult, updateNews);

router.delete("/:id", userAuthenticate, verifyAdmin, deleteNew);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *      News:
 *          properties:
 *              id:
 *                  allowNull: false
 *                  autoIncrement: true
 *                  primaryKey: true
 *                  type: integer
 *              name:
 *                  allowNull: false
 *                  type: string
 *              content:
 *                  allowNull: false
 *                  type: string
 *              image:
 *                  allowNull: false
 *                  type: string
 *              categoryId:
 *                  type: integer
 *                  references:
 *                      model: Categories
 *                      key: id
 *              deleteAt:
 *                  allowNull: false
 *                  type: date
 *              createAt:
 *                  allowNull: false
 *                  type: date
 *              updateAt:
 *                  allowNull: false
 *                  type: date
 *          required:
 *              - name
 *              - content
 *              - image
 *              - categoryId
 */

/**
 * @swagger
 * paths:
 *  /news:
 *      get:
 *          tags:
 *              - News
 *      post:
 *          tags:
 *              - News
 *          summary: Create a news
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/News'
 *                      example:
 *                          name: New
 *                          content: Last new
 *                          image: New.jpg
 *                          categoryId: 1
 *          responses:
 *              '201':
 *                  description: OK
 *              '403':
 *                  description: Token does'nt belong to any user
 *              '500':
 *                  description: An unexpected error occurred
 *  /news/{id}:
 *      get:
 *          tags:
 *              - News
 *          summary: Get a news by id
 *          parameters:
 *              - name: id
 *                description: New ID
 *                required: true
 *                schema:
 *                  type: integer
 *          responses:
 *              '200':
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/News'
 *                          example:
 *                              name: New
 *                              content: Last new
 *                              image: New.jpg
 *                              categoryId: 1
 *              '403':
 *                  description: Token does'nt belong to any user
 *              '404':
 *                  description: This news doesn't exist!
 *              '500':
 *                  description: Internal Server Error
 *      put:
 *          tags:
 *              - News
 *          summary: Delete a news by id
 *          parameters:
 *              - name: id
 *                description: New ID
 *                required: true
 *                schema:
 *                  type: integer
 *          responses:
 *              '200':
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/News'
 *                          example:
 *                              name: New
 *                              content: Last new
 *                              image: New.jpg
 *              '403':
 *                  description: Token does'nt belong to any user
 *              '404':
 *                  description: News not found
 *              '500':
 *                  description: Internal Server Error
 *      delete:
 *          tags:
 *              - News
 *          summary: Delete a new by id
 *          parameters:
 *              - name: id
 *                description: New ID
 *                required: true
 *                schema:
 *                  type: integer
 *          responses:
 *              '200':
 *                  description: The new has been deleted!
 *              '403':
 *                  description: Token does'nt belong to any user
 *              '404':
 *                  description: The new does'nt exist or it had been deleted
 *              '500':
 *                  description: Internal Server Error
 */