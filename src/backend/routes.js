const express = require("express");
const db = require("../db/db.js");

const router = express.Router();

//routes for game
router.get("/game", async (req, res) => {
    try {
        const game = await db.select("*").from("game");
        res.send(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post("/game/new", async (req, res) => {
    const { name, state, notes, images } = req.body;
    try {
        const game = await db("game").insert({ name, state, notes, images });
        res.status(201).send(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.put("/game/:id", async (req, res) => {
    const { id } = req.params;
    const { name, state, notes, images } = req.body;

    try {
        // Update the record in the database
        const updatedGame = await db("game")
            .where({ id })
            .update({ name, state, notes, images })
            .returning(["id", "name", "state", "notes", "images"]); // Only for PostgreSQL

        // If no rows were updated, send a 404
        if (updatedGame.length === 0) {
            return res.status(404).json({ error: "Game not found" });
        }

        // Respond with the updated row
        res.status(200).json(updatedGame);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "An error occurred while updating the game" });
    }
});
router.delete("/game/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const game = await db("game").where({ id }).del();
        if (game) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "Game not found" });
        }
    } catch {
        res.status(500).json({ error: error.message });
    }
});

//routes for saltwaterfish
router.get("/saltwaterfish", async (req, res) => {
    try {
        const saltfish = await db.select("*").from("saltfish");
        res.send(saltfish);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post("/saltwaterfish/new", async (req, res) => {
    const { name, state, notes, images } = req.body;
    try {
        const saltfish = await db("saltfish").insert({ name, state, notes, images });
        res.status(201).send(saltfish);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.put("/saltwaterfish/:id", async (req, res) => {
    const { id } = req.params;
    const { name, state, notes, images } = req.body;

    try {
        // Update the record in the database
        const updatedSaltfish = await db("saltfish")
            .where({ id })
            .update({ name, state, notes, images })
            .returning(["id", "name", "state", "notes", "images"]); // Only for PostgreSQL

        // If no rows were updated, send a 404
        if (updatedSaltfish.length === 0) {
            return res.status(404).json({ error: "Saltfish not found" });
        }

        // Respond with the updated row
        res.status(200).json(updatedSaltfish);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "An error occurred while updating the saltfish" });
    }
});
router.delete("/saltwaterfish/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const saltfish = await db("saltfish").where({ id }).del();
        if (saltfish) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "saltfish not found" });
        }
    } catch {
        res.status(500).json({ error: error.message });
    }
});

//routes for freshwaterfish
router.get("/freshwaterfish", async (req, res) => {
    try {
        const freshfish = await db.select("*").from("freshfish");
        res.send(freshfish);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post("/freshwaterfish/new", async (req, res) => {
    const { name, state, notes, images } = req.body;
    try {
        const freshfish = await db("freshfish").insert({ name, state, notes, images });
        res.status(201).send(freshfish);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.put("/freshwaterfish/:id", async (req, res) => {
    const { id } = req.params;
    const { name, state, notes, images } = req.body;

    try {
        // Update the record in the database
        const updatedFreshfish = await db("freshfish")
            .where({ id })
            .update({ name, state, notes, images })
            .returning(["id", "name", "state", "notes", "images"]); // Only for PostgreSQL

        // If no rows were updated, send a 404
        if (updatedFreshfish.length === 0) {
            return res.status(404).json({ error: "Freshfish not found" });
        }

        // Respond with the updated row
        res.status(200).json(updatedFreshfish);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "An error occurred while updating the freshfish" });
    }
});
router.delete("/freshwaterfish/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const freshfish = await db("freshfish").where({ id }).del();
        if (freshfish) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "freshfish not found" });
        }
    } catch {
        res.status(500).json({ error: error.message });
    }
});

//routes for plants
router.get("/plants", async (req, res) => {
    try {
        const plants = await db.select("*").from("plants");
        res.send(plants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post("/plants/new", async (req, res) => {
    const { name, state, notes, images } = req.body;
    try {
        const plants = await db("plants").insert({ name, state, notes, images });
        res.status(201).send(plants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.put("/plants/:id", async (req, res) => {
    const { id } = req.params;
    const { name, state, notes, images } = req.body;

    try {
        // Update the record in the database
        const updatedPlants = await db("plants")
            .where({ id })
            .update({ name, state, notes, images })
            .returning(["id", "name", "state", "notes", "images"]); // Only for PostgreSQL

        // If no rows were updated, send a 404
        if (updatedPlants.length === 0) {
            return res.status(404).json({ error: "Plant not found" });
        }

        // Respond with the updated row
        res.status(200).json(updatedPlants);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "An error occurred while updating the plant" });
    }
});
router.delete("/plants/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const plants = await db("plants").where({ id }).del();
        if (plants) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "plants not found" });
        }
    } catch {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;